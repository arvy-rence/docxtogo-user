import React, {useEffect, useState} from "react";
import {AiOutlineFieldNumber} from "react-icons/ai";
import {BiBookBookmark} from "react-icons/bi";
import toast, {Toaster} from "react-hot-toast";
import {Button, Modal, Label, TextInput, Select, Textarea} from "flowbite-react";
import {HiDocumentAdd} from "react-icons/hi";
import {FaPhoneAlt} from "react-icons/fa";
import axios from "../../server/index"
import {useRouter} from "next/router";
import {toastOptions} from "../../styles/modalOptions";

const AddRequestModal = ({lrnProps}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [documentType, setDocumentType] = useState("1");
  const [purpose, setPurpose] = useState("For Scholarship");
  const [otherPurpose, setOtherPurpose] = useState("")
  const [lrn, setLrn] = useState(lrnProps);
  const router = useRouter();

  useEffect(() => {
    console.table({contactNumber, documentType, purpose, lrn, otherPurpose});
  }, [contactNumber, documentType, purpose, lrn, otherPurpose])

  // check if fields are empty
  const checkFields = () => {
    return !(contactNumber === "" || documentType === "" || purpose === "");
  }

  async function handleCreateRequest() {
    if (!checkFields()) {
      toast.error("Please fill in all fields", toastOptions);
      return;
    }
    const parsedDocumentType = parseInt(documentType);

    try {
      await toast.promise(
        axios.post("/request/create", {
          contact: contactNumber,
          document: parsedDocumentType,
          purpose: purpose + (purpose === "Other" ? `: ${otherPurpose}` : ""),
          lrn: lrn
        }),
        {
          loading: "Creating Request",
          success: "Request Created Successfully",
          error: "Error Creating Request"
        },
        {...toastOptions, duration: 3000}
      )
      router.reload()
    } catch (e) {
      console.log(e);
    }
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <Toaster/>
      <Button onClick={() => setIsOpen(true)} className="font-work uppercase font-bold">
        <HiDocumentAdd className="mr-2"/>
        Create a New Request
      </Button>
      <Modal
        show={isOpen}
        size="md"
        popup={true}
        onClose={() => setIsOpen(false)}
        className="font-work"
      >
        <Modal.Header/>
        <Modal.Body>
          <div className="space-y-4 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-2xl font-medium text-primary dark:text-white text-center font-bold uppercase">
              Create a New Document Request
            </h3>
            <div>
              <div className="block">
                <Label
                  htmlFor="lrn"
                  value="LRN"
                />
              </div>
              <TextInput
                id="lrn"
                type="text"
                icon={AiOutlineFieldNumber}
                required={true}
                defaultValue={lrn}
                disabled
              />
            </div>
            <div>
              <div className="block">
                <Label
                  htmlFor="contactNumber"
                  value="Contact Number"
                />
              </div>
              <TextInput
                id="contactNumber"
                type="text"
                icon={FaPhoneAlt}
                required={true}
                placeholder="Enter Mobile Number"
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div>
              <div id="select">
                <div className="block">
                  <Label
                    htmlFor="strand"
                    value="Document Type to Request"
                  />
                </div>
                <Select
                  id="strand"
                  required={true}
                  icon={BiBookBookmark}
                  onChange={(e) => setDocumentType(e.target.value)}
                >
                  <option value="1">
                    Certified True Copy of Form 137
                  </option>
                  <option value="2">
                    Good Moral
                  </option>
                  <option value="3">
                    Certificate of Enrolment
                  </option>
                  <option value="4">
                    Batchwide/Strandwide Certificate of Ranking
                  </option>
                </Select>
              </div>
            </div>
            <div>
              <div id="select">
                <div className="block">
                  <Label
                    htmlFor="strand"
                    value="Document Type to Request"
                  />
                </div>
                <Select
                  id="strand"
                  required={true}
                  icon={BiBookBookmark}
                  onChange={(e) => setPurpose(e.target.value)}
                >
                  <option value="For Scholarship">
                    For Scholarship
                  </option>
                  <option value="For College Admission">
                    For College Admission
                  </option>
                  <option value="For Financial Assistance">
                    For Financial Assistance
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </Select>
              </div>
            </div>
            {purpose === "Other" ? (
              <div id="textarea">
                <div className="mb-2 block">
                  <Label
                    htmlFor="purpose"
                    value="Request Purpose"
                  />
                </div>
                <Textarea
                  id="purpose"
                  placeholder="Document Request Purpose"
                  required={true}
                  rows={2}
                  onChange={(e) => setOtherPurpose(e.target.value)}
                />
              </div>
            ) : null}
            <div className="w-full">
              <Button type="submit" className="w-full" onClick={() => handleCreateRequest()}>
                Create New Document Request
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}

export default AddRequestModal