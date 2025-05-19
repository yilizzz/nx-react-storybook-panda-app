import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="flag"><path id="Vector" d="M4 21V15.6871M4 15.6871C9.81818 11.1377 14.1818 20.2363 20 15.6869V4.31347C14.1818 8.86284 9.81818 -0.236103 4 4.31327V15.6871Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkFlag);
export default ForwardRef;