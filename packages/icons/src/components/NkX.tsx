import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="x"><path id="Vector" d="M18 6.00005L6 18M5.99995 6L17.9999 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkX);
export default ForwardRef;