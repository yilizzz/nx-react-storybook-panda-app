import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkTypeText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="type-text"><path id="Vector" d="M12.5294 20L7.76471 4L3 20M4.59614 14.9701H10.9333M15.1765 11.9403C16.7647 10.9328 21 9.92537 21 13.4515C21 16.9776 21 20 21 20M21 14.459C19.4118 14.9627 14.6471 14.9627 14.6471 17.9851C14.6471 21.0075 19.4118 20 21 17.4813" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkTypeText);
export default ForwardRef;