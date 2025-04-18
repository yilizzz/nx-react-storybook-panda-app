import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkLetterS = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="letter-s"><path id="Vector" d="M15.25 8.5625V8.25C15.25 7.55964 14.6904 7 14 7H10.25C9.55964 7 9 7.55964 9 8.25V9.48056C9 10.2473 9.46678 10.9367 10.1786 11.2215L14.0714 12.7785C14.7832 13.0633 15.25 13.7527 15.25 14.5194V15.75C15.25 16.4404 14.6904 17 14 17H10.25C9.55964 17 9 16.4404 9 15.75V15.4375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkLetterS);
export default ForwardRef;