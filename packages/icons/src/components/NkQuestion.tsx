import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkQuestion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="question"><path id="Vector" d="M12 21V20.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M12 17.5C12 12.4004 17 13.6753 17 8.57582C17 1.80798 7 1.80804 7 8.57588" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkQuestion);
export default ForwardRef;