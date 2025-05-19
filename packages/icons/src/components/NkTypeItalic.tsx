import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkTypeItalic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="type-italic"><path id="Vector" d="M19 3H9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M15 21H5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_3" d="M14.5 3L10 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkTypeItalic);
export default ForwardRef;