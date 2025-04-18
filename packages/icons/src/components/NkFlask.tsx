import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkFlask = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="flask"><path id="Vector" d="M9.89417 3.5V11.5L6.23481 15.4649C5.30208 16.7304 3.43947 18.7409 5.28645 20.0868C5.85354 20.5 6.90072 20.5 8.99508 20.5H15.0049C17.0993 20.5 18.1465 20.5 18.7136 20.0868C20.5605 18.7409 18.6979 16.7304 17.7652 15.4649L14.1058 11.5V3.5M9.89417 3.5H14.1058M9.89417 3.5H8.84125M14.1058 3.5H15.1588" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkFlask);
export default ForwardRef;