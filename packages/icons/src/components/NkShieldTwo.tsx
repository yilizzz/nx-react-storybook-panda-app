import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkShieldTwo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="shield-two"><path id="Vector" d="M12 21C12 21 19 16.4 19 11V6.15959C19 5.89869 18.8023 5.68023 18.5427 5.65427C16.5452 5.45452 14.6279 4.76447 12.9613 3.64544L12 3M12 21C12 21 5 16.4 5 11V6.15959C5 5.89869 5.1977 5.68023 5.45731 5.65427C7.45482 5.45452 9.37206 4.76447 11.0387 3.64544L12 3M12 21V3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkShieldTwo);
export default ForwardRef;