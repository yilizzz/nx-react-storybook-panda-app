import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkLetterX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="letter-x"><path id="Vector" d="M8 7L15.5 17M8 17L15.5 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkLetterX);
export default ForwardRef;