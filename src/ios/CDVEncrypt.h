/*
 MIT
 */

#import <UIKit/UIKit.h>
#import <Cordova/CDVPlugin.h>

@interface CDVDevice : CDVPlugin
{}

+ (NSString*)cordovaVersion;

- (void)getDeviceInfo:(CDVInvokedUrlCommand*)command;

@end
