import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkSkipBack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="skip-back"><path id="Vector" d="M4.5 3V21M9.22609 12.7809L17.8753 19.7002C18.5301 20.2241 19.5 19.7579 19.5 18.9194V5.08063C19.5 4.24212 18.5301 3.77595 17.8753 4.29976L9.22609 11.2191C8.72568 11.6195 8.72568 12.3805 9.22609 12.7809Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkSkipBack);
export default ForwardRef;