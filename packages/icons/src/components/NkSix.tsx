import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkSix = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="six"><path id="Vector" d="M13.75 7H12.5C10.4289 7 8.75 8.67893 8.75 10.75V13.875M8.75 13.875C8.75 15.6009 10.1491 17 11.875 17C13.6009 17 15 15.6009 15 13.875C15 12.1491 13.6009 11.375 11.875 11.375C10.1491 11.375 8.75 12.1491 8.75 13.875Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkSix);
export default ForwardRef;