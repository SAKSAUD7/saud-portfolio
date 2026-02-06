from PIL import Image
import os
import shutil

# Source and destination directories
source_dir = r"c:\Users\saksa\OneDrive\Desktop\New folder (8)"
dest_dir = r"c:\Users\saksa\OneDrive\Desktop\saudportfolio\saud-portfolio\public\images\gallery"

# Create destination if it doesn't exist
os.makedirs(dest_dir, exist_ok=True)

# Crop settings - remove top 100 pixels (Chrome bar)
crop_top = 100

print("Starting image processing...")
print("=" * 60)

# Project folders mapping
project_folders = {
    "ninja": "ninja",
    "metakey": "metakey",
    "bsm": "bsm",
    "mbs": "mbs",
    "flexipdf": "flexipdf",
    "crumble": "crumble"
}

processed_count = 0
error_count = 0

# Process each project folder
for folder_name, project_id in project_folders.items():
    folder_path = os.path.join(source_dir, folder_name)
    
    if not os.path.exists(folder_path):
        print(f"⚠️  Folder not found: {folder_name}")
        continue
    
    print(f"\n📁 Processing {folder_name.upper()}...")
    
    # Get all images in folder
    images = [f for f in os.listdir(folder_path) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    for img_file in images:
        src_path = os.path.join(folder_path, img_file)
        dest_path = os.path.join(dest_dir, img_file)
        
        try:
            # Open and crop image
            img = Image.open(src_path)
            width, height = img.size
            
            # Only crop if image is tall enough
            if height > crop_top:
                cropped = img.crop((0, crop_top, width, height))
                cropped.save(dest_path, 'PNG', optimize=True)
                print(f"  ✓ {img_file} - Cropped {width}x{height} → {width}x{height-crop_top}")
            else:
                # Just copy if too small
                shutil.copy2(src_path, dest_path)
                print(f"  ✓ {img_file} - Copied (too small to crop)")
            
            processed_count += 1
            
        except Exception as e:
            print(f"  ✗ Error processing {img_file}: {e}")
            error_count += 1

# Process standalone images
print(f"\n📁 Processing STANDALONE IMAGES...")

standalone_images = {
    "ma electricals.jpeg": "ma-electricals",
    "pysiocare.jpeg": "physiocare"
}

for img_file, project_id in standalone_images.items():
    src_path = os.path.join(source_dir, img_file)
    
    if os.path.exists(src_path):
        # Create new filename
        new_filename = f"{project_id}-main.png"
        dest_path = os.path.join(dest_dir, new_filename)
        
        try:
            img = Image.open(src_path)
            width, height = img.size
            
            # Crop if needed
            if height > crop_top:
                cropped = img.crop((0, crop_top, width, height))
                cropped.save(dest_path, 'PNG', optimize=True)
                print(f"  ✓ {img_file} → {new_filename} - Cropped")
            else:
                img.save(dest_path, 'PNG')
                print(f"  ✓ {img_file} → {new_filename} - Converted")
            
            processed_count += 1
            
        except Exception as e:
            print(f"  ✗ Error processing {img_file}: {e}")
            error_count += 1

print("\n" + "=" * 60)
print(f"✅ Processing complete!")
print(f"   Processed: {processed_count} images")
print(f"   Errors: {error_count}")
print(f"   Destination: {dest_dir}")
