#include "functions.h"

using v8::FunctionTemplate;

// NativeExtension.cc represents the top level of the module.
// C++ constructs that are exposed to javascript are exported here

NAN_MODULE_INIT(InitAll) {
  Nan::Set(target, Nan::New("MakeFullScreenPanel").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(MakeFullScreenPanel)).ToLocalChecked());
  Nan::Set(target, Nan::New("MakeNormalPanel").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(MakeNormalPanel)).ToLocalChecked());
  Nan::Set(target, Nan::New("MakeKeyWindow").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(MakeKeyWindow)).ToLocalChecked());
}

NODE_MODULE(NativeExtension, InitAll)
