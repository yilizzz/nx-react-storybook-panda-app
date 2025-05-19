import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkFive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="five"><path id="Vector" d="M14.375 7C11.875 7.625 8.75 7 8.75 7V10.5656L12.2226 10.5656C13.7567 10.5656 15 11.63 15 12.9428V14.342C15 17.8644 8.75 17.9076 8.75 14.342" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkFive);
export default ForwardRef;