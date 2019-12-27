import serial
import sys 

# specifiy COM port
try:
    port_number = int(sys.argv[1])
    COM = "COM{}".format(port_number, timeout=1) # set timeout for readline()
    print("reading in from {}".format(COM))
except:
    print("Please select a value to compress by (e.g. 1,2,3,...19, etc.)")
    sys.exit(0)

# initialize port communication
baud = 115200
port = serial.Serial(COM, baud)

while True:
	try:
		user_input = input("send message to board:\t")
		# make new line and add carriage return to end of string
		user_input = user_input + " \r" 
		port.write(user_input.encode())
		board_output = port.readline().decode().rstrip() # remove carriage and newline characters
		print(board_output)

	# close serial port when CTRL+C
	except KeyboardInterrupt:
		print("\n...ending communication")
		port.close()
		sys.exit(0)
