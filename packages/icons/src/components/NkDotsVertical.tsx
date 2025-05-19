import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkDotsVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="dots-vertical"><path id="Vector" d="M12.25 12H11.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M12.25 8H11.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_3" d="M12.25 16H11.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkDotsVertical);
export default ForwardRef;