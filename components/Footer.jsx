import React from "react";
import {Footer} from "flowbite-react";
import {FooterDivider} from "flowbite-react/lib/esm/components/Footer/FooterDivider";


const CustomFooter = () => {
  return (
    <Footer container={true} rounded={false}>
      <Footer.Copyright
        href="#"
        by="All rights reserved"
        year={2023}
        className="font-work text-primary text-lg"
      />
    </Footer>
  )
}

export default CustomFooter;