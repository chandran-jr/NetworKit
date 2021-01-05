import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class EditDate extends StatefulWidget {
  @override
  _EditDateState createState() => _EditDateState();
}

class _EditDateState extends State<EditDate> {
  final DateFormat dateFormat = DateFormat('dd/MM/yyyy');
  String _selectedDate = 'Enter date';

  Future<void> _selectDate(BuildContext context) async {
    final DateTime d = await showDatePicker(
        context: context,
        initialDate: DateTime.now(),
        firstDate: DateTime(1990),
        lastDate: DateTime(2100),
        builder: (BuildContext context, Widget child) {
          return Theme(
              data: ThemeData.light().copyWith(
                primaryColor: Color(0xff0085FF),
                accentColor: Color(0xff0085FF),
                colorScheme: ColorScheme.light(primary: Color(0xff0085FF)),
                buttonTheme:
                    ButtonThemeData(textTheme: ButtonTextTheme.primary),
              ),
              child: child);
        });
    if (d != null)
      setState(() {
        _selectedDate = dateFormat.format(d);
      });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 150,
      decoration: const BoxDecoration(
        boxShadow: [
          BoxShadow(
            color: Colors.grey,
            offset: Offset(2.0, 2.0), //(x,y)
            blurRadius: 6.0,
          )
        ],
        color: Color(0xffF40303),
        borderRadius: BorderRadius.all(
          Radius.circular(25),
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: InkWell(
          child: Text(
            _selectedDate,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Color(0xffFFFFFF),
              fontFamily: 'Pacifico',
              fontSize: 25,
            ),
          ),
          onTap: () {
            _selectDate(context);
          },
        ),
      ),
    );
  }
}
