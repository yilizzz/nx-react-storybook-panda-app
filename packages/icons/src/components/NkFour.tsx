import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkFour = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="four"><path id="Vector" d="M12.9167 7C11.875 10.75 8.75 13.875 8.75 13.875H15M13.4375 17V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkFour);
export default ForwardRef;