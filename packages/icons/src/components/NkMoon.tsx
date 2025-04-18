import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkMoon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="moon"><path id="Vector" d="M21 12.808C20.4992 18.1548 15.1513 21.9483 9.89256 20.7915C-0.0763974 18.5985 1.14983 3.90821 11.1116 3C6.39428 9.29614 14.618 17.4619 21 12.808Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkMoon);
export default ForwardRef;