# 电类部件的系统识别号（基本FIN号）

电类部件的系统识别号由2位字母组成 -

- 第一位：系统识别代码
- 第二位：电路识别代码

## 一、系统识别代码

- `A`、`B` - 保留，用于航空公司自定义（如航空公司认为某些没有FIN号的部件对于自己比较特别，需要FIN标识）
- `C` - 飞控系统
- `D` - 除冰系统
- `E` - 发动机监控
- `F` - 飞行仪表
- `G` - 起落架
- `H` - 空调
- `J` - 点火
- `K` - 发动机控制和启动
- `L` - 灯光
- `M` - 座舱(装饰)设施、设备
- `P` - 直流电分配系统
- `Q` - 燃油
- `R` - 无线电（导航通信）
- `S` - 雷达导航
- `T` - 特殊电器
- `V` - 虚拟电路
- `W` - 火警
- `X` - 交流电分配系统

## 二、电路识别码

同一个字母，在不同系统中的意义不一样，例如`A`，在飞控系统中表示自动推力接通，而在除冰系统中表示探头防冰。

## 三、系统识别号列表

系统识别号 = 系统识别代码+电路识别代码。

FIN号 = 前缀+系统识别号+后缀

### 1、C-飞控系统

- `CA` - 自动推力接通
- `CA` - 电力供给（FMGS）
- `CA` - 离散/数字接口（FMGS）
- `CA` - ARINC总线接口（FMGS）
- `CC` - 参与内部监控
- `CC` - 电气液压供给（FAC）
- `CC` - 离散/数字接口（FAC）
- `CC` - ARINC总线接口（FAC）
- `CE` - 控制(信号)输入(电路)的供电
- `CE` - ELAC系统
- `CE` - SEC系统
- `CE` - FCDC系统
- `CN` - 襟翼位置指示
- `CN` - 缝翼位置指示
- `CV` - 缝翼的电控监控
- `CV` - 襟翼的电控监控

### 2、D-除冰

- `DA` - 探头防冰
- `DB` - 风挡防雨
- `DD` - 结冰探测
- `DG` - 风挡防冰除雾
- `DH` - 逃生梯的锁机构防冰
- `DL` - 大翼防冰
- `DN` - 发动机进气道防冰
- `DR` - 机组暖脚
- `DS` - 辅助设备（含门区域的加热面板）
- `DU` - 排放桅杆防冰
- `DV` - 水勤务面板加热
- `DW` - 饮用水防冰

### 3、E-发动机监控

- `EL` - 燃油滤堵塞警告
- `EG` - 反推开关机构
- `EN` - 滑油指示的供电
- `EV` - 发动机振动指示

### 4、F-飞行仪表

- `FH` - HUD
- `FN` - 攻角指示
- `FN` - 备用数据：高度和空速
- `FN` - 备用数据：姿态和航向
- `FN` - 无线电磁航向信息-切换和指示
- `FP` - 传感器供电切换
- `FR` - 航班号提醒
- `FS` - 电子时钟
- `FW` - PVI
- `FX` - 机载机场导航

### 5、G-起落架液压

- `GA` - Normal extension retraction
- `GB` - Indicating warning
- `GB` - Landing gear-position information
- `GC` - Steering
- `GD` - Yellow main hydraulic power
- `GE` - Blue auxiliary hydraulic power (ram air turbine)
- `GG` - Normal braking
- `GG` - Alternate braking with anti skid
- `GG` - Alternate braking without anti skid
- `GG` - Parking/ultimate emergency braking
- `GH` - Reservoir pressurization indicating
- `GJ` - Blue main hydraulic power
- `GK` - Green main hydraulic power
- `GL` - Power transfer
- `GN` - Hydraulic fluid pressure indicating
- `GP` - Ground internal leak test system
- `GQ` - Hydraulic fluid quantity indicating
- `GR` - Hydraulic fluid temperature indicating
- `GS` - Brake cooling
- `GT` - Weight and balance system (WBS)
- `GV` - Tire pressure indicating system (TPIS)
- `GW` - Brake system temperature
- `GX` - Yellow auxiliary hydraulic power (electrical/hand pumps)

### 6、H-空调

- `HA` - Engine bleed air supply system
- `HB` - Flow control indicating
- `HD` - Avionics equipment ground cooling
- `HC` - Cargo compartment heating
- `HF` - Leak detection
- `HG` - Air distribution recirculation
- `HH` - Pack temperature control
- `HJ` - Door area heating
- `HK` - Cockpit cabin temperature control
- `HL` - Pressure control monitoring
- `HN` - Cargo compartment ventilation
- `HP` - Passenger compartment seats
- `HQ` - Avionics equipment ventilation
- `HT` - Control indicating
- `HU` - Lavatory/galley ventilation
- `HV` - APU bleed air supply and crossbleed systems
- `HZ` - Emergency ram air inlet

### 7、J-点火

- `JH` - Ignition starting and continuous relight

### 8、K-发动机控制和启动

- `KA` - Starting
- `KB` - Air intake system
- `KC` - Engine master control
- `KD` - Control monitoring
- `KL` - Emergency shutdown
- `KS` - Functional interfaces
- `KT` - APU oil heating

### 9、L-灯光

- `LA` - Navigation lights
- `LB` - Landing lights
- `LC` - Runway turnoff lights
- `LE` - General illumination
- `LF` - Instrument panel integral lighting
- `LG` - General illumination
- `LJ` - Service area lighting
- `LK` - Air conditioning duct accessory compt lighting
- `LL` - Wheel well lighting
- `LN` - Main deck cargo compartment lighting
- `LP` - Annunciator light test dimming
- `LQ` - Lavatory lighting
- `LR` - Taxi take off lights
- `LS` - Equipment compartment lighting
- `LU` - FWD-AFT cargo compartment lighting
- `LV` - Anti-collision/strobe lighting
- `LW` - Passenger reading lights
- `LX` - Wing engine scan lighting
- `LY` - Logo lights
- `LZ` - Cabin work, cabin attendant

### 10、M-座舱(装饰)设施、设备

- `MA` - Quantity indicating
- `MB` - Distribution
- `MC` - Galley supply
- `MD` - Air supply boost system
- `ME` - Electrical service supply
- `MF` - Supplementary medical equipment
- `MG` - Toilet system
- `MH` - Passenger information system
- `MH` - Passenger entertainment (video)
- `MJ` - Cargo compt door electrical control system
- `MK` - Passenger entertainment (music)
- `ML` - Forward galley
- `ML` - Mid galley unit
- `ML` - Aft galley
- `MP` - Water draining (dump)
- `MQ` - Passenger compartment fixed interior doors
- `MS` - Cockpit seats
- `MT` - Razor supply
- `MV` - Waste level indicating
- `MW` - Entrance stairs system
- `MX` - Miscellaneous emergency equipment
- `MY` - Semi automatic cargo loading

### 11、P-直流电分配

- `PB` - DC generation - batteries
- `PC` - DC essential normal generation switching
- `PE` - DC emergency generation (TR)
- `PH` - DC essential distribution
- `PN` - DC main distribution
- `PP` - DC ancillary equipment
- `PR` - Refuelling on battery
- `PU` - DC main generation (TR)
- `PV` - DC generation monitoring indicating
- `PX` - DC ground service bus control

### 12、Q-燃油

- `QA` - Main fuel pump system
- `QC` - APU fuel pump system
- `QE` - Crossfeed system
- `QF` - APU LP fuel shut off
- `QG` - Engine LP fuel shut off
- `QH` - Additional center tank transfer system
- `QJ` - Tank level sensing
- `QL` - Main transfer system
- `QN` - Fuel control and monitoring system (FCMS)
- `QP` - Intercell transfer system
- `QS` - Fuel recirculation - cooling
- `QT` - Quantity indicating
- `QU` - Refuel/defuel system

### 13、R-无线电（导航通信）

- `RB` - Aircraft communication addressing reporting system (ACARS)
- `RC` - VHF system
- `RD` - Pax facilities - air to ground telephone
- `RE` - HF/calsel aerocall system
- `RF` - Cabin management system
- `RF` - Cabin information network system (CINS)
- `RG` - Radio management
- `RH` - Cabin intercommunication DATA system (CIDS)
- `RJ` - Service interphone
- `RK` - Cockpit voice recorder
- `RN` - Audio management (integrating/flight interphone/selcal/call)
- `RP` - ADF
- `RQ` - On-Board Mobile Telephony System
- `RR` - Pax facilities` - AM/FM radio system
- `RS` - VOR/MARKER
- `RT` - ILS
- `RU` - MLS (microwave landing system)
- `RV` - Satellite communication
- `RX` - Announcement-music tape reproducer system
- `RZ` - Voice privacy system

### 14、S-雷达导航

- `SA` - Radio altimeter
- `SD` - DME
- `SG` - TCAS (traffic collision avoidance system)
- `SH` - ATC/Mode S (select)
- `SN` - Satellite navigation
- `SQ` - Weather radar system

### 15、T-特殊电器

- `TA` - On board peripherals and flight operational peripherals
- `TD` - Up and down data loading system acquisition/interface and equipment
- `TL` - Aircraft information network system
- `TT` - Gate link
- `TU` - Digital flight data recording sys. intercon. (FDIU, DFDR, LA, QAR)
- `TU` - DFRS input interface
- `TV` - AIDS interconnection (DMU, DAR.)
- `TV` - AIDS input interface
- `TW` - Centralized fault display interface (CFDIU)
- `TW` - Multifunction printing (printer)
- `TX` - Air trafic and information management system (ATIMS)

### 16、V-虚拟电路

- `VB` - Main wire routing (harnesses)
- `VC` - A/C electrical connectors
- `VD` - Diode module
- `VG` - Ground terminal block
- `VH` - Ground and resistor terminal module
- `VN` - Ground points
- `VP` - Pressure seal feedthrough
- `VS` - Splices
- `VT` - Terminal blocks
- `VU` - Panels
- `VZ` - Spare wires (ATA 2499 only)

### 17、W-火警

- `WA` - Avionics compartment smoke detection
- `WC` - Cockpit to ground crew call system
- `WD` - Engine fire overheat detection
- `WE` - Engine fire extinguishing
- `WF` - APU fire extinguishing
- `WG` - APU fire overheat detection
- `WH` - Cargo compartment smoke detection
- `WJ` - Passenger lighted signs
- `WL` - Cabin emergency lighting
- `WN` - Emergency escape slide release warning and overpressure warning systems
- `WP` - Evacuation signaling equipment
- `WQ` - Lavatory smoke detection
- `WR` - Control indicating
- `WT` - EIS - control
- `WT` - DMC - acquisition/interface
- `WT` - EIS - switching
- `WV` - SDAC - acquisition/interface
- `WW` - FWS - acquisition/interface
- `WX` - Cargo compartment fire extinguishing
- `WZ` - Ground proximity warning system (GPWS)

### 18、X-交流电

- `XA` - Galley supply control
- `XB` - Static inverter (generation)
- `XC` - AC essential generation switching
- `XE` - AC emergency generation (CSM/G, GCU)
- `XG` - AC external power control (GPCU)
- `XH` - AC essential distribution
- `XN` - AC main distribution
- `XP` - AC equipment ancillary
- `XS` - AC auxiliary generation (APU generator GCU)
- `XT` - Integrated drive generator system (IDG, GCU)
- `XU` - AC main generation
- `XX` - AC ground service bus control

### 19、Y-惰性气体

- `YA` - Inert gas generation system