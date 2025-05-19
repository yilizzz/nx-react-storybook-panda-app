import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkAt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="at"><path id="Vector" d="M16 11.9956V7.99755M16 11.9956C16 6.83884 8 6.83909 8 11.9956C8 17.1632 16 17.1055 16 11.9956ZM16 11.9956C16 16.9959 21 16.9959 21 11.9956C21 7.02746 16.9706 3 12 3C7.02944 3 3 7.02746 3 11.9956C3 16.9637 7.02944 20.9912 12 20.9912C13.6745 21.0749 15.9379 20.57 17.7759 19.1598" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkAt);
export default ForwardRef;