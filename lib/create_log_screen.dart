import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'components/journy_title.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'components/save_button.dart';
import 'components/log.dart';
//import 'package:intl/intl.dart';

class CreateNew extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: EdgeInsets.all(8),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Journy(
                bgColor: Color(0xffFFFF00),
                txtColor: Color(0xffFF0000),
                text: 'Journy',
              ),
              SizedBox(
                height: 10,
              ),
              Journy(
                  bgColor: Color(0xffF40303),
                  txtColor: Color(0xffFFFFFF),
                  text: 'Date',
                  fn: () {
                    showDatePicker(
                        context: context,
                        initialDate: DateTime.now(),
                        firstDate: DateTime(1990),
                        lastDate: DateTime(2990),
                        builder: (BuildContext context, Widget child) {
                          return Theme(
                              data: ThemeData.light().copyWith(
                                primaryColor: Color(0xff0085FF),
                                accentColor: Color(0xff0085FF),
                                colorScheme: ColorScheme.light(
                                    primary: Color(0xff0085FF)),
                                buttonTheme: ButtonThemeData(
                                    textTheme: ButtonTextTheme.primary),
                              ),
                              child: child);
                        });
                  }),
              SizedBox(
                height: 20,
              ),
              DailyLog(),
              SizedBox(
                height: 20,
              ),
              GestureDetector(
                onLongPress: () {}, //function of recording
                child: Container(
                  decoration: BoxDecoration(boxShadow: [
                    BoxShadow(
                      color: Colors.grey,
                      offset: Offset(2.0, 2.0), //(x,y)
                      blurRadius: 6.0,
                    ),
                  ], shape: BoxShape.circle),
                  child: CircleAvatar(
                    radius: 40,
                    backgroundColor: Color(0xff0085FF),
                    child: Center(
                      child: SvgPicture.asset(
                        "images/microphone.svg",
                        height: (MediaQuery.of(context).size.height) * 0.08,
                        width: (MediaQuery.of(context).size.width) * 0.08,
                        color: Color(0xffFFFFFF),
                      ),
                    ),
                  ),
                ),
              ),
              SizedBox(
                height: 25,
              ),
              SaveButton(),
            ],
          ),
        ),
      ),
    );
  }
}
