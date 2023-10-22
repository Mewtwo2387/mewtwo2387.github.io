import qrcode
img = qrcode.make('https://e2fb-218-250-72-32.ap.ngrok.io')
type(img)  # qrcode.image.pil.PilImage
img.save("qr_code.png")