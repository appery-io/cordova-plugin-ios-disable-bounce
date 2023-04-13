#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

// Implementation of https://github.com/ionic-team/capacitor/issues/1169
@implementation UIScrollView (NoBounce)
- (void)didMoveToWindow {
    [super didMoveToWindow];
    self.bounces = NO;
    self.alwaysBounceVertical = NO;
    self.showsVerticalScrollIndicator = NO;
}
@end
