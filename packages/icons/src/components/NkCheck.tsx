import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="check"><path id="Vector" d="M6 13.6261L7.60619 15.3478C8.49194 16.2972 8.93481 16.772 9.43113 16.9218C9.86704 17.0534 10.3305 17.0181 10.7459 16.8217C11.2189 16.598 11.5985 16.0606 12.3579 14.9859L18 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkCheck);
export default ForwardRef;