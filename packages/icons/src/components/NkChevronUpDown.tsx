import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkChevronUpDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="chevron-up-down"><path id="Vector" d="M8 16L12 20L16 16M8 8L12 4L16 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkChevronUpDown);
export default ForwardRef;