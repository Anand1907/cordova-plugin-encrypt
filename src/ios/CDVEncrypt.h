/*
 MIT
 */

#import <UIKit/UIKit.h>
#import <Cordova/CDVPlugin.h>

@interface CDVEncrypt : CDVPlugin
{}

- (void)getKeyDetails:(CDVInvokedUrlCommand*)command;

@end
