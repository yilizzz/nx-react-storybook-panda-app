import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="undo"><path id="Vector" d="M5.63605 18.364C7.2647 19.9927 9.5147 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02945 16.9706 3 12 3C7.94209 3 5.4824 5.7045 3 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M3 4.5V8.5H7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkUndo);
export default ForwardRef;