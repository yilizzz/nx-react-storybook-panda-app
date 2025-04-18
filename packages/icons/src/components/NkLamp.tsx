import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkLamp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="lamp"><path id="Vector" d="M12 21V12M12 21H8.99999M12 21H15M12 12H18L15.4867 4.29775C15.1939 3.51715 14.4477 3 13.614 3H10.386C9.55231 3 8.80607 3.51715 8.51334 4.29775L6 12H12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkLamp);
export default ForwardRef;