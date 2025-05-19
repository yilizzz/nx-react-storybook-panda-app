import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkNavigation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="navigation"><path id="Vector" d="M11.5398 3.33273C11.7102 2.88909 12.2898 2.88909 12.4602 3.33273L18.96 20.2494C19.1381 20.7128 18.6882 21.1663 18.2749 20.9399L12.2248 17.6249C12.0835 17.5474 11.9165 17.5474 11.7752 17.6249L5.72509 20.9399C5.31185 21.1663 4.86194 20.7128 5.04002 20.2494L11.5398 3.33273Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkNavigation);
export default ForwardRef;