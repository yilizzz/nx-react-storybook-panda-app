import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkNavigationOne = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="navigation-one"><path id="Vector" d="M3.41392 12.0861C2.91626 11.9617 2.84896 11.282 3.31255 11.0624L20.2178 3.05466C20.6817 2.83491 21.1651 3.31834 20.9453 3.78225L12.9376 20.6875C12.718 21.151 12.0383 21.0837 11.9139 20.5861L10.2934 14.1041C10.2445 13.9084 10.0916 13.7555 9.8959 13.7066L3.41392 12.0861Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkNavigationOne);
export default ForwardRef;