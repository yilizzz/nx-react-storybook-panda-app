import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkThree = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="three"><path id="Vector" d="M8.75 9.49281C8.75 6.16906 15 6.16906 15 9.49281C15 9.49281 15 12 11.875 12C15 12 15 14.5072 15 14.5072C15 17.8309 8.75 17.8309 8.75 14.5072" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkThree);
export default ForwardRef;