import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'components/journy_title.dart';
import 'components/save_button.dart';
import 'components/log.dart';
import 'components/date.dart';

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
              EditDate(),
              SizedBox(
                height: 20,
              ),
              DailyLog(
                text: 'contents spoken are written here',
              ),
              SizedBox(
                height: 20,
              ),
              FloatingActionButton(
                onPressed: null,
                child: Icon(
                  Icons.mic,
                  color: Colors.white,
                  size: 40,
                ),
                backgroundColor: Color(0xff0085FF),
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
