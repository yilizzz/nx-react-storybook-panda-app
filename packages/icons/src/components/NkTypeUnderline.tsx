import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkTypeUnderline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="type-underline"><path id="Vector" d="M6 3V10.5385C6 12.2522 6.63214 13.8957 7.75736 15.1075C8.88258 16.3192 10.4087 17 12 17C13.5913 17 15.1174 16.3192 16.2426 15.1075C17.3679 13.8957 18 12.2522 18 10.5385V3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M4 21H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkTypeUnderline);
export default ForwardRef;