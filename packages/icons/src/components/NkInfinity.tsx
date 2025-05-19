import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkInfinity = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="infinity"><path id="Vector" d="M14 9.41721C14.8383 8.57524 15.7933 8 17 8C19.2091 8 21 9.79086 21 12C21 14.2091 19.2091 16 17 16C12.5 16 11.5 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16C8.20668 16 9.16169 15.4248 10 14.5828" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkInfinity);
export default ForwardRef;