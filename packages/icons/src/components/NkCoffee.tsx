import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkCoffee = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="coffee"><path id="Vector" d="M18 10H19.5C20.8807 10 22 11.1193 22 12.5C22 13.8807 20.8807 15 19.5 15H18M18 10C18 9.47075 17.6394 9 17.0767 9H4.92285C4.41305 9 4 9.41305 4 9.92285V17.0002C4 19.2094 5.79086 21.0002 8 21.0002H14C16.2091 21.0002 18 19.2094 18 17.0002V15M18 10V15M16 3L14 6M13 3L11 6M10 3L8 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkCoffee);
export default ForwardRef;