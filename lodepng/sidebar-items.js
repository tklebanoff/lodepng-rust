initSidebarItems({"enum":[["ChunkPosition","Position in the file section after…"],["Image","Bitmap types."]],"fn":[["decode24","Same as `decode_memory`, but always decodes to 24-bit RGB raw image"],["decode24_file","Same as `decode_file`, but always decodes to 24-bit RGB raw image"],["decode32","Same as `decode_memory`, but always decodes to 32-bit RGBA raw image"],["decode32_file","Same as `decode_file`, but always decodes to 32-bit RGBA raw image"],["decode_file","Load PNG from disk, from file with given name. Same as the other decode functions, but instead takes a file path as input."],["decode_memory","Converts PNG data in memory to raw pixel data."],["encode24","Same as `encode_memory`, but always encodes from 24-bit RGB raw image"],["encode24_file","Same as `encode_file`, but always encodes from 24-bit RGB raw image"],["encode32","Same as `encode_memory`, but always encodes from 32-bit RGBA raw image"],["encode32_file","Same as `encode_file`, but always encodes from 32-bit RGBA raw image"],["encode_file","Converts raw pixel data into a PNG file on disk. Same as the other encode functions, but instead takes a file path as output."],["encode_memory","Converts raw pixel data into a PNG image in memory. The colortype and bitdepth of the output PNG image cannot be chosen, they are automatically determined by the colortype, bitdepth and content of the input pixel data."]],"mod":[["ffi",""]],"struct":[["Bitmap","Low-level representation of an image"],["ChunkRef","Reference to a chunk"],["ChunkRefMut",""],["Grey","Opaque greyscale pixel (acces with `px.0`)"],["GreyAlpha","Greyscale pixel with alpha (`px.1` is alpha)"],["RGB","This is it. The component type can be `u8` (aliased as `RGB8`), `u16` (aliased as `RGB16`), or any other type (but simple copyable types are recommended.)"]],"type":[["RGBA","Alpha is last. The crate doesn't impose which value represents transparency, but usually it's 0 = transparent, 255 = opaque."]]});