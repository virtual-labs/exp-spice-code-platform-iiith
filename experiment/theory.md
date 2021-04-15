A spice input file, also called source file, consistsof three parts:

   - **Data statements:** These statements are description of the components and their I nterconnections.

   - **Control statements:** These statements are responsible to tell SPICE simulator what type of analysis to perform on the circuit.

   - **Output statements:** These statements specify what outputs are to be printed or plotted.


   Although these statements may appear in any order, it is recommended that they be given in the above sequence. Two other statements are required: the title statement and the end statement. The title statement is the first line and can contain any information, while the end statement is always .END. The title statement must be a line or word. In addition, you can insert comment statements, which must begin with an asterisk (*) and are ignored by SPICE Simulator.

<img src="Exp7_TheoryImages/1.png">

   **1. Data Statements**

   (A).Independent DC Sources

   <img src="images/Exp7_TheoryImages/2.png">

   N1 is the positive terminal node. N2 is the negative terminal node. Type can be DC, AC or TRAN, depending on the type of analysis. Value gives the value of the source. The name of a voltage and current source must start with V and I, respectively.

   <img src="images/Exp7_TheoryImages/3.png">

   The positive current direction through the current or voltage source is from the positive (N1) node to the negative (N2) node:

   (B) Elements: for example MOSFETS

   <img src="images/Exp7_TheoryImages/4.png">

   The MOS transistor name (Mname) has to start with a M; ND, NG, NS and NB are the node numbers of the Drain, Gate, Source and Bulk terminals, respectively. ModName is the name of the transistor model (NMOS or PMOS). L and W are the length and width of the gate (in m).

   2. Commands or Control Statements:


   .TRAN Statement

   <img src="images/Exp7_TheoryImages/5.png"> 
  
   This statement specifies the time interval over which the transient analysis takes place, and the time increments. The format is as follows: TSTEP is the printing increment. TSTOP is the final time TSTART is the starting time (if omitted, TSTART is assumed to be zero) TMAX is the maximum step size. UIC stands for Use Initial Conditions. If UIC is specified then simulator will use the initial conditions specified in the element statements.

   3.Output Statements

   <img src="images/Exp7_TheoryImages/6.png">

   These statements will instruct Simulator what output to generate. If you do not specify an output statement, Simulator will always calculate the DC operating points. The two types of outputs are the prints and plots. A print is a table of data points and a plot is a graphical representation. The format is as follows:

   In above format TYPE specifies the type of analysis to be printed or plotted and can be:

   <img src="images/Exp7_TheoryImages/7.png">

   The output variables are Y1, Y2 and can be voltage or currents in voltage sources. Node voltages and device currents can be specified as magnitude (M), phase (P), real (R) or imaginary (I) parts by adding the suffix to V or I as follows:


   M: Magnitude.

   DB: Magnitude in dB (decibels).

   P: Phase.

   R: Real part.

   I: Imaginary part.

   <img src="images/Exp7_TheoryImages/8.png">

   Complete example (Inverter-Netlist):

   <img src="images/Exp7_TheoryImages/9.png">

   In introduction of this experiment we have seen what is spice actually. In first experiment we have designed inverter, so as we have read in introduction that whenever you place anyting like transistor or capacitor etc., there is a code which is written at back end corresponding to the element placed on screen. So in this experiment we are going to learn what is taht code which is written in the back end, that is, we learn how to write that code directly, that is, we will learn basic inverter designing using spice coding.

   The following is the code for inverter in spice along with some of the explaination.

   <img src="images/spice1.jpg">

   Now we will be learning actually what parameters are specified by each of the element in every line in detail

   **FIRST LINE**

  First line of spice code is always a comment. So this line is always ignored by spice. Spice does not do any kind of processing on this line.

   **INCLUDE LINE**

  .include line includes the model file but you should confirm that your model file should be in your current directory in which you are working.

   **LINE CORRESPONDING TO TRANSISTOR**
