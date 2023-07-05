# Spice Code Platform

## Code -  

- The code block that defines the name of the gate, includes file, and declares parameters should be placed first, followed by the code block that defines the voltage source, then the block that defines the inverter subcircuit, followed by the netlist statement that instantiates and calls the inverter subcircuit, then the block that defines the input waveform 'a' followed by the control statements to run the circuit and plot the required graphs, and then finally the end of code block.
- Drag and drop the code blocks to arrange them in the order mentioned above.
- Now enter the name of the MOSFET model file to be included ("PTM_45nm.txt").
- To define the voltage source, enter a name for it and then select vdd as the positive terminal and 0 or gnd as the negative terminal.
- Now, define the subcircuit by giving it a name and also giving names to the input and output arguments of the subckt.
- Then inside this subckt block, give connections to the pmos and nmos as follows:
 *INSTANCE_NAME DRAIN GATE SOURCE BODY NAME_OF_MOSFET_AS_MENTIONED_IN_MODEL_FILE_INCLUDED w=WIDTH l=LENGTH*
 Give an instance name to both nmos and pmos, then the drain ports of both MOSFETS are to be connected to the output of the subcircuit, the gates to the input and the source and body of pmos to vdd, and of nmos to gnd or 0 respectively.
 These connections are made as per the given circuit diagram:

 <img src="images/cmos_inverter.png">

- Now end the subckt block by typing the name of the subcircuit after '.ends'.
- Now call this inverter subcircuit by giving an instance name, then by giving 'a' as input and 'out' as output and then complete the call by typing in the inverter subckt name.
- **Note** : *While giving names to the subcircuit, nodes, variables and instance names, make sure that they begin with either alphabets, '%', '$' or '_' charachter only and they can only contain alphanumeric characters,'%', '$' and '_' charachters only. The spice code is case insensitive so make sure to not give same names to any 2 variables in the same circuit or subcircuit irrespective of the case.*

## Observations -

- On clicking "validate" option after completing the code (assuming everything is filled correctly) you should see a "Success" message, a report, an input graph and an output graph under the observations section.
- Observe the input wave and the corresponding output wave.

