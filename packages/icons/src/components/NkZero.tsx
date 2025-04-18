import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkZero = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="zero"><path id="Vector" d="M8.75 13.875V10.125C8.75 8.39911 10.1491 7 11.875 7C13.6009 7 15 8.39911 15 10.125V13.875C15 15.6009 13.6009 17 11.875 17C10.1491 17 8.75 15.6009 8.75 13.875Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkZero);
export default ForwardRef;