import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkSkipForward = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="skip-forward"><path id="Vector" d="M19.5 3V21M14.7739 12.7809L6.1247 19.7002C5.46993 20.2241 4.5 19.7579 4.5 18.9194V5.08063C4.5 4.24212 5.46993 3.77595 6.1247 4.29976L14.7739 11.2191C15.2743 11.6195 15.2743 12.3805 14.7739 12.7809Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkSkipForward);
export default ForwardRef;