import {NavigationContainerRef} from '@react-navigation/core';
import {LinkingOptions} from '@react-navigation/native';

export declare global {
  var REACT_NAVIGATION_DEVTOOLS: WeakMap<
    NavigationContainerRef<any>,
    {readonly linking: LinkingOptions<any>}
  >;
}
