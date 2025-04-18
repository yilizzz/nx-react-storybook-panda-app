import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkShootingStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="shooting-star"><path id="Vector" d="M12 5.64706L9.35294 3M9.88235 9.88235L4.05882 4.05882M5.64706 12L3 9.35294M8.29412 14.6471L12.5294 12.5294L14.6471 8.29412L16.7647 12.5294L21 14.6471L16.7647 16.7647L14.6471 21L12.5294 16.7647L8.29412 14.6471Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkShootingStar);
export default ForwardRef;