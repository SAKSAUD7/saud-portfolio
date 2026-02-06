from PIL import Image
import os

# Directory containing the images
image_dir = r"c:\Users\saksa\OneDrive\Desktop\saudportfolio\saud-portfolio\public\images\gallery"

# Get all PNG files
image_files = [f for f in os.listdir(image_dir) if f.endswith('.png')]

print(f"Found {len(image_files)} images to process")

# Crop settings - remove top 100 pixels (Chrome bar)
crop_top = 100

for filename in image_files:
    filepath = os.path.join(image_dir, filename)
    
    try:
        # Open image
        img = Image.open(filepath)
        width, height = img.size
        
        # Crop: (left, top, right, bottom)
        # Remove top 100px
        cropped = img.crop((0, crop_top, width, height))
        
        # Save back to same file
        cropped.save(filepath, 'PNG', optimize=True)
        print(f"✓ Cropped {filename} - Original: {width}x{height}, New: {width}x{height-crop_top}")
        
    except Exception as e:
        print(f"✗ Error processing {filename}: {e}")

print(f"\n✅ Completed processing {len(image_files)} images")
