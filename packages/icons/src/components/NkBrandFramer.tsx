import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkBrandFramer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="brand-framer"><path id="Vector" d="M12 15.6V21L5.5 15.6H12Z" stroke="currentColor" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M5.5 3L18.5 15.6H5.5V9.3H18.5V3H5.5Z" stroke="currentColor" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkBrandFramer);
export default ForwardRef;