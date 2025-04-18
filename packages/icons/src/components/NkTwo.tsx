import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkTwo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="two"><path id="Vector" d="M8.75 9.92073C8.75 6.02642 14.5192 6.02642 14.5192 9.92073C14.5192 12.8607 10.7499 15.3962 8.75 17C8.75 17 12.5 16.375 15 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkTwo);
export default ForwardRef;