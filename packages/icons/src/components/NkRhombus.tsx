import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkRhombus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="rhombus"><path id="Vector" d="M5.219 11.3399L11.1794 3.41506C11.5956 2.86165 12.4044 2.86165 12.8206 3.41506L18.781 11.3399C19.073 11.7282 19.073 12.2718 18.781 12.6601L12.8206 20.5849C12.4044 21.1384 11.5956 21.1384 11.1794 20.5849L5.219 12.6601C4.927 12.2718 4.927 11.7282 5.219 11.3399Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkRhombus);
export default ForwardRef;