import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkLayersTwo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="layers-two"><path id="Vector" d="M21.0001 14.0001L12.0001 18.0001L3.00012 14.0001M21.0001 10.0001L12.0001 14.0001L3.00012 10.0001L12.0001 6.00012L21.0001 10.0001Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkLayersTwo);
export default ForwardRef;