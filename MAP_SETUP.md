# Map Configuration for Al Ain, UAE

## Current Map Location

The map is currently set to display **Al Ain, UAE** using these coordinates:
- **Latitude**: 24.2075
- **Longitude**: 55.7447

## How to Update Map Location

### Option 1: Update in Sanity Studio (Recommended)

1. Go to http://localhost:3000/studio
2. Navigate to **Contact Info**
3. Update these fields:
   - **Latitude**: 24.2075
   - **Longitude**: 55.7447
   - **Address**: Your exact address in Al Ain
   - **City**: Al Ain
   - **State**: UAE

### Option 2: Update Default Values in Code

If you want to change the default location shown when no Sanity data exists:

**File**: `components/contact/MapSection.tsx`

```typescript
const latitude = data?.latitude || 24.2075  // Your latitude
const longitude = data?.longitude || 55.7447 // Your longitude
```

## Finding Your Exact Coordinates

### Method 1: Google Maps

1. Go to [Google Maps](https://maps.google.com)
2. Search for your business address in Al Ain
3. Right-click on your exact location
4. Click on the coordinates (they'll be copied)
5. Format: `24.1234, 55.5678` (latitude, longitude)

### Method 2: GPS Coordinates

If you have a smartphone:
1. Stand at your business location
2. Open Google Maps app
3. Long-press on your current location
4. Coordinates will appear at the top
5. Tap to copy

## Al Ain Key Locations

Here are coordinates for common Al Ain areas:

| Location | Latitude | Longitude |
|----------|----------|-----------|
| Al Ain City Center | 24.2075 | 55.7447 |
| Al Ain Mall | 24.2414 | 55.7658 |
| Al Ain Oasis | 24.2167 | 55.7597 |
| Bawadi Mall | 24.1956 | 55.7522 |
| Al Ain Airport | 24.2617 | 55.6092 |
| Al Ain Hospital | 24.2267 | 55.7528 |

## Testing the Map

1. Go to http://localhost:3000/contact
2. Scroll to the map section
3. Verify the pin is in the correct location
4. Click the marker to see popup
5. Click "Get Directions" to test Google Maps link

## Customizing the Map

### Change Zoom Level

**File**: `components/contact/Map.tsx` (Line 28)

```typescript
const map = L.map(containerRef.current).setView([latitude, longitude], 13)
//                                                                      ^^
//                                                                    Change this number
```

- **13** = Default (neighborhood level)
- **15** = Closer (street level)
- **11** = Wider (district level)

### Change Map Style

You can use different map tiles:

**Current**: OpenStreetMap (free, no API key needed)

**Alternative Options**:

1. **Mapbox** (modern, customizable)
```typescript
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  accessToken: 'YOUR_MAPBOX_TOKEN',
  id: 'mapbox/streets-v11',
})
```

2. **Google Maps** (familiar style)
- Requires Google Maps API key
- Follow Google Maps Platform setup

### Change Marker Color

Add custom marker icon in `components/contact/Map.tsx`:

```typescript
const customIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})
```

Available colors: blue, red, green, orange, yellow, violet, grey, black

## Map Features

### Current Features:
- ✅ Interactive pan and zoom
- ✅ Marker with popup
- ✅ "Get Directions" link
- ✅ Attribution
- ✅ Responsive design

### Optional Enhancements:

1. **Multiple Locations** - If you have multiple branches
2. **Custom Styling** - Match your brand colors
3. **Area Highlight** - Show service coverage area
4. **Satellite View** - Toggle between map/satellite

## Troubleshooting

**Map not loading?**
- Check internet connection (map tiles load from external server)
- Check browser console for errors
- Verify coordinates are valid numbers
- Clear browser cache

**Wrong location?**
- Double-check latitude/longitude values
- Ensure coordinates are not swapped
- Use Google Maps to verify

**Map too slow?**
- Reduce zoom level
- Check internet speed
- Consider caching tiles

## Support

Need help with the map?
- Leaflet Documentation: [leafletjs.com](https://leafletjs.com)
- OpenStreetMap: [openstreetmap.org](https://www.openstreetmap.org)

---

Your map is ready to display your Al Ain location! 🗺️✨
