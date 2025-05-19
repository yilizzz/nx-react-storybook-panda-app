import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkTree = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="tree"><path id="Vector" d="M12 17H19L14.5 10.5H17.5L12 3L6.5 10.5H9.5L5 17H12ZM12 17V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkTree);
export default ForwardRef;