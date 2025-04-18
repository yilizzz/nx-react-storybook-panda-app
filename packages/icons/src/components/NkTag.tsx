import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkTag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="tag"><path id="Vector" d="M4.47222 5.5H14.7697C15.2914 5.5 15.7924 5.70382 16.1659 6.068L21.5156 11.284C21.9182 11.6765 21.9182 12.3235 21.5156 12.716L16.1659 17.932C15.7924 18.2962 15.2914 18.5 14.7697 18.5H4.47222C3.52253 18.5 2.25 17.9588 2.25 16.875V7.125C2.25 6.04117 3.52253 5.5 4.47222 5.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkTag);
export default ForwardRef;